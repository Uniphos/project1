import React from 'react';
import myImage from 'C:/Users/victo/github/project_1/src/assets/awning.png'
import Cards from './cards'

const Forground = () => {
    return (
        <div className='forground' >
            <img src={myImage} alt='awning' />
            <h1>top 10 food trucks</h1>
            <table>
                <tbody>
                    <tr>
                        <Cards image = 'https://www.foodtruckarmy.com/image/bubba-s-hangover-diner-food-truck-kitchen_230712_0446_9ef807d5_754_thm.jpg' 
                        name = 'Bubba hangover Diner' style = 'Comfort Cuban-Caribbean' link = 'https://www.instagram.com/bubbashangoverdiner/'/>
                        <td></td>
                        <Cards image = 'https://www.foodtruckarmy.com/image/food-truck-tampa-florida-burger-21-tampa_230405_0139_92205425_727_thm.jpg' 
                        name = 'Burger 21 Tampa' style = 'Traditional American' link = 'https://www.burger21.com/locations/tampa-bay-food-truck/'/>
                        <td></td>
                        <Cards image = 'https://bft-production.storage.googleapis.com/resources/trucks/7756/images/high/-.jpg?1692814737' 
                        name = 'Kincho Grill' style = 'Latin American' link = 'https://kinchogrill.com'/>
                    </tr>
                    <td></td>
                    <tr>
                        <Cards image = 'https://d3hbe0kmbam4a5.cloudfront.net/photos/fdf91d7c-8292-4405-9045-6f75db0d6dde.jpeg' 
                        name = "Sweetie's BBQ" style = 'American Comfort' link = 'https://www.sweetiesbbq.com'/>
                        <td></td>
                        <Cards image = 'https://bft-production.storage.googleapis.com/resources/trucks/6431/images/original/-.jpg?1658791997' 
                        name = "Fin's Kitchen" style = 'Comfort Cuban-Caribbean' link = 'https://www.finskitchenfoodtruck.com'/>
                        <td></td>
                        <Cards image = 'https://www.foodtruckarmy.com/image/piehole-wood-fired-pizza-food-truck-kitchen_231115_0708_7ff8f95a_811_thm.jpg' 
                        name = 'Piehole Wood Fired Pizza' style = 'Italian' link = 'https://www.facebook.com/pieholewoodpizza/'/>
                    </tr>
                    <td></td>
                    <tr>
                        <Cards image = 'https://d3hbe0kmbam4a5.cloudfront.net/photos/00e8c811-303c-417f-bba8-f6d8fe91d26f.jpg' 
                        name = 'Space Coast Hotdogs' style = 'American Traditional' link = 'https://www.spacecoasthotdogs.com'/>
                        <td></td>
                        <Cards image = 'https://www.foodtruckarmy.com/image/food-truck-fort-lauderdale-florida-halo-food-truck_220723_0526_e785ea81_627_thm.jpg' 
                        name = 'Halo food Truck' style = 'American Fusion' link = 'https://halo-project.com'/>
                        <td></td>
                        <Cards image = 'https://neighborhoodnewsonline.net/wp-content/uploads/2018/11/Food-Truck-3.jpg' 
                        name = 'Casablanca fusion ' style = 'American Fusion' link = 'https://www.facebook.com/casablancafusion/'/>
                    </tr>
                    <td></td>
                    <tr>
                        <td></td>
                        <td></td>
                        <Cards image = 'https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/316040078_147227678055109_3227554195834781209_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=op6-Tf3_wuMAX8IAdiK&_nc_ht=scontent-mia3-2.xx&oh=00_AfAgujdAwlL3_TSAgtNfVa9xk_piHi9JaXVDDX3SHo6G3g&oe=65BAC121' 
                        name = 'Milky Waves Soft Serve' style = 'American Desert' link = 'https://www.facebook.com/milkywavesicecream/'/>
                    </tr>
                    <tr>
                        
                    </tr>
                    <tr>
                        
                    </tr>
                    <tr>
                        
                    </tr>
                    <tr>
                        
                    </tr>
                    <tr>
                        
                    </tr>
                    <tr>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Forground;
