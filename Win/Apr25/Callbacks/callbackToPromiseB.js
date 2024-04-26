const fs = require('fs/promises'); // Assuming Promise-based file system methods
const gm = require('gm').subClass({ imageMagick: true }); // Assuming Promise support

async function processFiles(source, dest, widths) {
    try {
        const files = await fs.readdir(source);

        for (const filename of files) {
            const filePath = source + filename;
            console.log('start file')

            try {
                const values = await gm(filePath).size((err, values) => {
                    //debugging 
                    if (err) {
                        console.error('Error identifying file size:', err);
                    } else {
                        console.log('continue')
                        console.log(filename, values); // Inspect the values here

                        // start of code
                        const aspect = values.width / values.height;
                        for (const width of widths) {
                            const height = Math.round(width / aspect);
                            const resizedFilePath = dest + 'w' + width + '_' + filename;
        
                            gm(filePath)
                                .resize(width, height)
                                .write(resizedFilePath, () => {console.log(`writing to ${resizedFilePath}...`)});
        
                            console.log(`Resized ${filename} to ${height}x${height}`);
                        }
                    }
                });
            } catch (err) {
                console.error(`Error processing ${filename}:`, err);
            }
        }
    } catch (err) {
        console.error('Error finding files:', err);
    }
}

processFiles(`../Shared/`, `Apr25/Transfers/`, [512, 1024])
