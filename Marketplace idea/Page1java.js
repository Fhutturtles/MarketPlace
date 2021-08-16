function newsarray()
{
for(let A = 0; A <= 50; A++)
{
let News = document.getElementById("tables");
if(A%2 == 0)
{
let New_News_TableT= document.createElement("table");
let New_News_TableA = document.createElement("tr");
let New_News_TableB = document.createElement("th");
let New_News_TableC = document.createElement("div");
New_News_TableC.className = "imageT";
let New_News_TableD = document.createElement("img");
New_News_TableD.className = "imges";
New_News_TableD.src = "software.png";
let New_News_TableF = document.createElement("th");
let New_News_TableG = document.createElement("div");
New_News_TableG.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione dignissimos similique dolores, sapiente id, blanditiis minus enim omnis sunt, dolorum asperiores velit officiis cupiditate sit iste. Nobis, illo quo.";

News.appendChild(New_News_TableT);
New_News_TableT.appendChild(New_News_TableA);
New_News_TableA.appendChild(New_News_TableB);
New_News_TableB.appendChild(New_News_TableC);
New_News_TableC.appendChild(New_News_TableD);
New_News_TableA.appendChild(New_News_TableF);
New_News_TableF.appendChild(New_News_TableG);
}
else{
    let New_News_TableT= document.createElement("table");
let New_News_TableA = document.createElement("tr");

let New_News_TableF = document.createElement("th");
let New_News_TableG = document.createElement("div");
New_News_TableG.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione dignissimos similique dolores, sapiente id, blanditiis minus enim omnis sunt, dolorum asperiores velit officiis cupiditate sit iste. Nobis, illo quo.";

let New_News_TableB = document.createElement("th");
let New_News_TableC = document.createElement("div");
New_News_TableC.className = "imageT";
let New_News_TableD = document.createElement("img");
New_News_TableD.className = "imges";
New_News_TableD.src = "software.png";

News.appendChild(New_News_TableT);
New_News_TableA.appendChild(New_News_TableF);
New_News_TableF.appendChild(New_News_TableG);

New_News_TableT.appendChild(New_News_TableA);
New_News_TableA.appendChild(New_News_TableB);
New_News_TableB.appendChild(New_News_TableC);
New_News_TableC.appendChild(New_News_TableD);

}
}
}

/*
this is hte table html original code

<tr align="right">
            <th>
                <div class="imageT">
                <img src="software.png"  alt="ard1" style="width: 40%;" class="imges" >
                </div>
            </th>
            <th> 
                <div class="randtextM" style="color:  green; width: 30%"   >Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Nesciunt ratione dignissimos similique dolores, sapiente id, blanditiis minus enim omnis sunt, 
                    dolorum asperiores velit officiis cupiditate sit iste. Nobis, illo quo. </div>
            </th>

    </tr>
        <tr align="right">
                <th>
            
                    <div class="randtextM" style="color:  green;width: 30%"  >Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Nesciunt ratione dignissimos similique dolores, sapiente id, blanditiis minus enim omnis sunt, 
                        dolorum asperiores velit officiis cupiditate sit iste. Nobis, illo quo. </div>

                </th>
                <th> 
                        <div class="imageT">
                            <img src="software.png"  alt="ard1" style="width: 40%;" class="imges">
                            </div>
                </th>

                */

                
  function showNews()
{
    document.getElementById("Contact_Page").style.display = "none";
    document.getElementById("About_Page").style.display = "none";
    document.getElementById("News_Page").style.display = "";
    newsarray();
}
function showAbout()
{
    document.getElementById("Contact_Page").style.display = "none";
    document.getElementById("About_Page").style.display = "";
    document.getElementById("News_Page").style.display = "none";
}
function showContact()
{
    document.getElementById("Contact_Page").style.display = "";
    document.getElementById("About_Page").style.display = "none";
    document.getElementById("News_Page").style.display = "none";
}