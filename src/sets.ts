const assert = require("assert");

/** Accepts a "command" string and returns an array of output lines. */
function execute(command: string): string[] {
  return [];
}

describe("set", () => {
  it("can add", () => {
    assert.deepEqual(execute("ADD color blue"), [") Added"]);
    assert.deepEqual(execute("ADD color green"), [") Added"]);
    assert.deepEqual(execute("ADD color green"), [") ERROR, key already exists"]);
  });
  beforeEach(() => {});
});

export {};
