import { describe, it, expect, vi } from "vitest";
import { handleEventListener } from "./handleEventListener.ts";

describe.skip("handleEventListener", () => {
  it("adds a new event listener if one does not exist", () => {
    const mockElement = document.createElement("div");
    const mockListener = vi.fn();
    handleEventListener(mockElement, "click", mockListener);

    mockElement.click();
    expect(mockListener).toHaveBeenCalledTimes(1);
  });

  it("updates existing event listener", () => {
    const mockElement = document.createElement("div");
    const firstListener = vi.fn();
    const secondListener = vi.fn();

    handleEventListener(mockElement, "click", firstListener);
    handleEventListener(mockElement, "click", secondListener);

    mockElement.click();
    expect(firstListener).toHaveBeenCalledTimes(0);
    expect(secondListener).toHaveBeenCalledTimes(1);
  });

  it("removes event listener when passed undefined as listener", () => {
    const mockElement = document.createElement("div");
    const mockListener = vi.fn();
    handleEventListener(mockElement, "click", mockListener);
    handleEventListener(mockElement, "click", undefined);

    mockElement.click();
    expect(mockListener).toHaveBeenCalledTimes(0);
  });
});
