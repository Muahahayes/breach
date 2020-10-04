import React from 'react';
import { Link } from 'react-router-dom';
export default {
  name:"Equipment",
  content: <div>
    In Breach many items of clothing and other equipped items provide purely cosmetic effects and are not covered in the official rules. However, there are 5 categories of Equipment 
    which are covered in the rules. Your Character may equip one item for each of the 5 categories (Melee Weapons may equip more depending on if you are Dual Wielding). 
    Your Character may equip up to their Equip Weight, you begin with 2 Equip Weight and you gain 1 more per point of <Link to="/rules/stats">Strength</Link>.
    The effect given by that item will be listed on that item's Equipment page. Items will have a Price listed on their page, this Price is the standard value in Gold but may change based on region.
    Tools are also listed alongside Equipment, although they do not require Equip Weight and are not worn on your body but instead are carried with you and used as needed.<br/><br/>
    These items and links to their Equipment page are given in their Equipment table:
    <ul>
      <li><Link to="/equipment/melee">Melee Weapons</Link></li>
      <li><Link to="/equipment/ranged">Ranged Weapons</Link></li>
      {/* <li><Link to="/equipment/deflector">Deflectors</Link></li> */}
      <li><Link to="/equipment/plating">Armor</Link></li>
      <li><Link to="/equipment/aegis">Shields</Link></li>
      <li><Link to="/equipment/tool">Tools</Link></li>
    </ul>
  </div>
}