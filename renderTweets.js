
function renderTweets(tweets) {
   
    var mappedTweets = tweets.map(function(currentTweets){
         

        var display="";
        var verify="";
        if (currentTweets.user.isVerified==true){
            verify+= "data:image/png;base64,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";
            
        }else{
            display+="display:none"

        }
        var verifyTweet=verify;
        var verifyDisplay=display;
        
        
        
        
        return `
                <div class="container border mt-5 mb-5 p-3" style="width:500px; height:220px;" >
                    <div class="row">
                         <div class="col-2 pr-2 d-flex justify-content-end">
                            <img src=${currentTweets.user.profilePic}  style="width:50px; height:50px;">
                         
                         </div>
                         <div class="col-10 pl-0">
                            <div  >
                                <h4 class='mb-1' > ${currentTweets.user.username} <img src="${verifyTweet}" style="${verifyDisplay};width:25px; height:25px;"></h4>
                               
                            </div>
                            <div class="handle" style="color:grey;">
                                <p> ${currentTweets.user.handle} </p>
                            </div>
                         </div>
                         

                
                        
                    </div>

                    <div class="body">
                        <h4> ${currentTweets.text}<hr style="margin-bottom:0;"></h4>
                    </div>
                   
                    <div class="d-flex flex-row justify-content-start ">
                        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNn4co832LX2JIAdqxxmwl1ZWb-Lp72oKeGeJH909kFRIxJZ-s"  style="height:18px;width:18px; "><span style="font-size:13px; margin-left:7px; color:grey;">${currentTweets.replies}</span>
                        <img src="https://png.icons8.com/small/1600/retweet.png" style="height:18px;width:18px; margin-left:20px;"><span style="font-size:13px;margin-left:7px;color:grey;">${currentTweets.retweets}</span>
                        <img src="http://icons-for-free.com/free-icons/png/512/2239656.png" style="width:25px; height:25px; margin-left:20px;"><span style="font-size:13px;margin-left:7px;color:grey;">${currentTweets.likes}</span>
                        <img src="https://i.warbycdn.com/v/c/assets/footer-help-links/image/email/1/245dc93278.png" style="width:25px; height:25px; margin-left:20px;">
                        
                    </div>

                </div>

            `


    });

    var newTweet=mappedTweets.join('');

    return newTweet;
   
    
}


function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}