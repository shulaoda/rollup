import { env } from 'node:process';
import pc from 'picocolors';

// @see https://no-color.org
// @see https://www.npmjs.com/package/chalk
export const { bold, cyan, dim, gray, green, red, underline, yellow } = pc.createColors(
	env.FORCE_COLOR !== '0' && !env.NO_COLOR
);
