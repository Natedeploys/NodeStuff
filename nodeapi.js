function printMessage(username, badgeCount, point) {
  const message = `${username} has ${badgeCount} total badge(s) and ${point} points in JavaScript`;
  console.log(message);
}

function getProfile(username) {
  try {
    // Connect to the API URL (https://site.com/username.json)
    const request = https.get(`https://site.com/${username}.json`, response => {
      let body = "";
    // Read the data
    // Parse the data
    // Print out information 
      response.on('data', data => {
        body += data.toString();
      });
      
      response.on('end', () => {
         const profile = JSON.parse(body);
         printMessage(username, profile.badges.length, profile.points.JavaScrpt);   
      });
    });
  
    request.on('error', error => console.error(`Problem with request: ${error.message}`));
    } catch (error) {
      console.error(error.message);
    }
}

const users = process.argv.slice(2);
//const users = ["chalkers"];
users.forEach(getProfile);
