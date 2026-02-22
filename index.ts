import { writeFileSync } from "node:fs";
import path from "node:path";

writeFileSync(path.join(process.cwd(), "asd.txt"), "asd");