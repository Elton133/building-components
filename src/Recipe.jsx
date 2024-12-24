
import './Recipe.css'
import boba from './assets/boba.jpg';
import tomato from './assets/tomato.png';
import carrot from './assets/carrot.png';
import lettuce from './assets/lettuce.png';
import pepper from './assets/bell-pepper.png';
import chilli from './assets/red-chili-pepper.png';
import tea from './assets/herbal-tea.png';
import timer from './assets/timer.png';

export default function Recipe({ title, image, ingredients, instructions }) {
    return (
        <>
        <div id='recipe-main'>
        <img src={tomato} alt="tomato" class="falling-ingredient ingredient1" width="50" height="50"></img>
        <img src={carrot} alt="carrot" class="falling-ingredient ingredient2" width="50" height="50"></img>
        <img src={lettuce} alt="lettuce" class="falling-ingredient ingredient3" width="50" height="50"></img>
        <img src={pepper} alt="pepper" class="falling-ingredient ingredient4" width="50" height="50"></img>
        <img src={chilli} alt="chilli" class="falling-ingredient ingredient5" width="50" height="50"></img>
        <img src={tea} alt="tea" class="falling-ingredient ingredient6" width="50" height="50"></img>
        <div class='box'>
        <h1 className='recipes'>Recipe Book</h1>
         <div class='wave -one'></div>
         <div class='wave -two'></div>
        <div class='wave -three'></div>
      </div>
        </div>

        <div>
            <h2>{title} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cup-hot-fill" viewBox="0 0 16 16">
                {/* SVG path remains unchanged */}
                <path fillRule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5" />
                <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8" />
            </svg></h2>
            
            <div className='recipe-container'>
                <img className="capuccino" src={image} alt={title} />
                
                <div className='recipe-texts'>
                    <h3>Ingredients:</h3>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}><p>{ingredient}</p></li>
                        ))}
                    </ul>

                    <br />
                    <h3>Instructions:</h3>
                    <ol>
                        {instructions.map((instruction, index) => (
                            <li key={index}><p>{instruction}</p></li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>




        
        
        {/* <div>
            <h2>Capuccino <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cup-hot-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5" />
                <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8" />
            </svg></h2>
            <div className='recipe-container'>
                <img className="capuccino" src={capuccino} alt="capuccino" />
                <div className='recipe-texts'>
                    <span></span>
                    
                    <h3>Ingredients:</h3>
                    <ul>
                        <li><p>Espresso: 1 shot (about 30 ml) </p></li>
                        <li><p>Milk: 150 ml (whole milk works best for frothing) </p></li>
                        <li><p>Cocoa powder or cinnamon: for dusting (optional)</p></li>
                        <li><p>Sugar: to taste (optional)</p></li>
                    </ul>

                    <br />
                    <h3>Instructions:</h3>
                    <ol>
                        <li> <p>Prepare the Espresso: Brew one shot of espresso using your espresso machine or stovetop maker. Pour it into your coffee cup. </p></li>
                        <li> <p>Froth the Milk: In a small saucepan, heat the milk over medium heat until it's warm but not boiling (about 150°F or 65°C). Use a milk frother or steam wand to froth the milk until it doubles in volume and forms a creamy foam. If you don’t have a frother, you can shake the milk in a jar or whisk it vigorously. </p></li>
                        <li><p>Combine Espresso and Milk: Gently pour the frothed milk over the espresso. Aim for a ratio of about 1:1:1 for espresso, steamed milk, and milk foam. Start with the steamed milk, followed by spooning the foam on top.</p></li>
                        <li><p>Garnish (Optional): Dust the top with cocoa powder or cinnamon for extra flavor. You can also add sugar to taste. </p></li>
                        <li><p>Serve: Enjoy your homemade cappuccino while it's hot!</p></li>
                    </ol>
                </div>
            </div>

        </div> */}
        
        
        
        
        
        {/* <div>
                <h2>Boba Tea <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cup-hot-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5" />
                    <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8" />
                </svg></h2>
                <div id="boba" className='recipe-container'>
                    <img className="capuccino" src={boba} alt="capuccino" />
                    <div className='recipe-texts'>
                        <h3>Ingredients:</h3>
                        <ul>
            <li>1/2 cup Tapioca Pearls</li>
            <li>1 cup Black Tea, brewed and chilled</li>
            <li>1/2 cup Milk or Milk Alternative (whole milk, almond, oat, etc.)</li>
            <li>1-2 tablespoons Sweetener (sugar, honey, or syrup)</li>
            <li>Ice Cubes (optional)</li>
        </ul>

                        <br />
                        <h3>Instructions:</h3>
                        <ol>
            <li><p>Prepare the Tapioca Pearls: Boil water in a pot, add the tapioca pearls, and cook for 10-15 minutes (or follow package instructions). Drain and rinse with cold water, then let them sit in a bit of sweetener.</p></li>
            <li><p>Brew the Tea: Brew a cup of strong black tea and let it cool or refrigerate it.</p></li>
            <li><p>Assemble the Drink: In a glass, add the cooked tapioca pearls, ice (if desired), the brewed tea, and milk. Stir in the sweetener until dissolved.</p></li>
            <li><p>Serve: Stir well and enjoy with a wide straw!</p></li>
        </ol>
                    </div>
                </div>

            </div> */}
        
        
            </>
    );
}