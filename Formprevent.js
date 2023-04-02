const form = document.querySelector('#form')
const tweetcon = document.querySelector('#tweet')



const showtweet = document.createElement('li')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    // const username = document.querySelectorAll('input')[0];
    // const newtweet = document.querySelectorAll('input')[1]
    const uname = form.elements.username.value;
    const newtw =  form.elements.tweet.value;
    // const uname = form.elements.username;
    // const newtw =  form.elements.tweet;
    addTweet(uname, newtw)
    // addTweet(uname.value, newtw.value)
    // uname.value = ' ';
    // newtw.value = ' ';
})


const addTweet = (uname, newtw) => {

    const newTweet = document.createElement('li');
    const bTag = document.createElement('b')
    bTag.append(uname)
    newTweet.append(bTag)
    newTweet.append(` - ${newtw}`)
 tweetcon.append(newTweet)
}
