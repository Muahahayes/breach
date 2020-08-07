import React from 'react';
import { Link } from 'react-router-dom';
export default {
name: 'Crafting',
content: <div>

</div>
}
/*
  uses Craftsman or Runesmithing skills.
  Craftsman requires raw material resources to create tools, mechanical devices or non-magic weapons.
  Runesmithing requires a Prismatic Gem, a stone infused with Aether, to apply a runic engraving found in a blueprint upon an object.
  Crafting something always gives an XP, even on Soft results.
  Prismatic Gems lose potency after use, and after too many uses the Aether in them is spent and they become inert.
  Crafting consumes resources. A Prismatic Gem's Aether is not consumed on a Soft Fail.
  All Crafting requires at least 5 Skill for the lowest level blueprints.
*/