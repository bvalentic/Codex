const fs = require('fs').promises; // Assuming fs.promises
const gm = require('gm').subClass({ imageMagick: true }); // Assuming Promise support
// Let's assume gm has Promise versions like .sizeAsync, .resizeAsync

async function processFiles(source, dest, widths) {
    try {
        const files = await fs.readdir(source);

        for (const filename of files) {
            const originalPath = source + filename;

            try {
                console.log(filename);
                const values = await gm(originalPath).size(); // Assume gm has .sizeAsync()

                const aspect = (values.width / values.height);

                for (const width of widths) {
                    const height = Math.round(width / aspect);
                    console.log('resizing ' + filename + ' to ' + height + 'x' + height);

                    try {
                        await gm(originalPath)
                            .resize(width, height)  // Assume gm has .resizeAsync()
                            .write(dest + 'w' + width + '_' + filename);
                    } catch (resizeErr) {
                        console.error('Error resizing file:', resizeErr);
                    }
                }

            } catch (fileInfoErr) {
                console.error('Error getting file info:', fileInfoErr);
            }
        }

    } catch (readDirErr) {
        console.error('Error finding files:', readDirErr);
    }
}

processFiles(`../Shared`, `Apr25/Transfers/`, [16, 24])
