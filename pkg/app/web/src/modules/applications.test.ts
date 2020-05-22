import { applicationsSlice } from "./applications";

describe("applicationsSlice reducer", () => {
  it("should handle initial state", () => {
    expect(
      applicationsSlice.reducer(undefined, {
        type: "TEST_ACTION",
      })
    ).toMatchInlineSnapshot();
  });
});