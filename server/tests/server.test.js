const request = require("supertest")("http://localhost:8001");
const connection = require("../db/connection.js");

describe("Server tests", () => {
  beforeEach(done => {
    connection.query(
      `ALTER TABLE visits DROP FOREIGN KEY visits_ibfk_1`,
      () => {
        connection.query(
          `ALTER TABLE definitions DROP FOREIGN KEY definitions_ibfk_1`,
          () => {
            connection.query(`ALTER TABLE visits DROP word_id`, () => {
              connection.query(`ALTER TABLE definitions DROP word_id`, () => {
                connection.query(`TRUNCATE visits`, () => {
                  connection.query(`TRUNCATE definitions`, () => {
                    connection.query(`TRUNCATE words`, () => {
                      connection.query(
                        `ALTER TABLE visits ADD word_id INTEGER, ADD CONSTRAINT FOREIGN KEY(word_id) REFERENCES words(id)`,
                        () => {
                          connection.query(
                            `ALTER TABLE definitions ADD word_id INTEGER, ADD CONSTRAINT FOREIGN KEY(word_id) REFERENCES words(id)`,
                            () => {
                              connection.query(
                                `INSERT INTO words(word) VALUES ('test')`,
                                () => {
                                  connection.query(
                                    `INSERT INTO definitions(definition, example, hash_tags, created_date, created_by, upvotes, downvotes, word_id) VALUES ('test def', 'test example', 'test', "2017-08-02", "Nick", 1, 1, 1)`,
                                    () => {
                                      connection.query(
                                        `INSERT INTO visits(date, word_id) VALUES('2012-07-01', 1)`,
                                        done
                                      );
                                    }
                                  );
                                }
                              );
                            }
                          );
                        }
                      );
                    });
                  });
                });
              });
            });
          }
        );
      }
    );
  });

  // afterEach(() => {
  //   connection.end();
  // });

  it("should respond to a post request to /definition/word with all data", done => {
    request
      .get("/test")
      .set("Accept", "text/html")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200)
      // eslint-disable-next-line consistent-return
      .end(err => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
});
