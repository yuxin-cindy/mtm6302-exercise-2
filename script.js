// Add text in title and headline 
title.textContent = 'Interactive Gallery'
headline.textContent = 'Interactive Gallery'

// Targeting elements
const $images = document.getElementById('images')
const $description = document.getElementById('description')

let newElements = []

// Generate the image by incrementing id by each time
for (let i = 1; i < 13;i++){
    
    newElements.push(`
        
        <div class='image' id='image${i}'>
             <p>
                <img src='images/${i}.JPG'style="width:100%";margin:0 30px;>           
            </p>
            <div id='hover' style="background-color: transparent; ">Autumn View ${i}</div>
          
        </div>
    `)
}

$images.innerHTML = newElements.join('')

// Iterate through images to add event listener 
const $imageList = document.querySelectorAll('.image')

for (let item of $imageList){
    
    item.children[0].addEventListener('mouseover',function(event){
        item.style='width: 80% ' 
        item.style = 'margin:0 20px;'  
       item.children[0].style='box-shadow: 4px 4px 4px 2px rgba(128, 114, 106, 0.918); '        
    })
    
    item.children[0].addEventListener('mouseout',function(event){
        item.style='width: 100%'
        item.children[1].style='background-color: transparent;' 
        item.children[0].style='box-shadow: none; '   
    })
    
    item.children[0].addEventListener('click',function(event){
       
            $images.innerHTML = `<div class='text'>Autumn View <br>  Calabogie</div>` + item.children[0].innerHTML + `Go Back <br><br>
        
            <button class='button' onclick="location.reload()"><i class="im im-angle-left"></i></button>
            `

            $images.id = 'single_image'

    })
   
 }










 