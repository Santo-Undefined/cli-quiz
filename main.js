import { cli_quiz } from "./src/cli-quiz.js";

const exitCode = await cli_quiz();
Deno.exit(exitCode);
