import { Options } from "./types";
import defaults from "../src/utils/defaults";

const DEFAULT_SEP = ["<b>", "&zwj;</b>"];
const DEFAULT_FIXATION_POINT = 1;

export default (maybeOptions: Partial<Options>): Options =>
  defaults(maybeOptions, {
    sep: DEFAULT_SEP,
    fixationPoint: DEFAULT_FIXATION_POINT
  });
