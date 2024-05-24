import { Clubs } from "../../src/db/clubs.db";

async function getUsernameMeta(username:string):Promise<any> {
  try {
    const response = await fetch(`https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`, {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:125.0) Gecko/20100101 Firefox/125.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.7,de;q=0.3",
        "X-Mid": "15xjrj5b2pu916wq7q0q1s64yffe7foa29eq01xhn99o1qcoiey",
        "X-CSRFToken": "uHZNx5TfC58W686U4wGn1V",
        "X-IG-App-ID": "936619743392459",
        "X-ASBD-ID": "129477",
        "X-IG-WWW-Claim": "0",
        "X-Web-Device-Id": "110E064A-2713-4AF0-8EC2-8277D360B0E6",
        "X-Requested-With": "XMLHttpRequest",
        "Sec-GPC": "1",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
      },
      "referrer": `https://www.instagram.com/${username}/`,
      "method": "GET",
      "mode": "cors"
    });
    // console.log(response);
    
    return await response.json();
  } catch (error) {
    console.warn(`Error is: ${error}`);
    return null;
  }
}

const instagramUsernames = Clubs.map(async club => {
  // let instagramUsername = '';
  let lastInstagramPostDate = Math.floor(new Date().getTime()/1000); // now
  if(club.contact.preferred === 'instagram') {
    const regex = /https:\/\/www\.instagram\.com\/(.+?)(?=\/|$)/;
    const match = club.contact.instagram.match(regex);
    if(match && match.length > 1){
      const response = await getUsernameMeta(match[1]);
      console.log(`Username: ${match[1]}`)
      console.log(response);
      
      if(response && response.data && response.data.user.edge_owner_to_timeline_media.edges.length > 1){
        lastInstagramPostDate = response.data.user.edge_owner_to_timeline_media.edges[0].node.taken_at_timestamp;
      }
      return {
        ...club,
        lastInstagramPostDate
      }
    }
  }
});

async function main(){
  const responses = await Promise.all(instagramUsernames);
  console.log(responses);
}
main()
