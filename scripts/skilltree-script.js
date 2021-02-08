"use strict";
exports.__esModule = true;
var beautiful_skill_tree_1 = require("../node_modules/beautiful-skill-tree");
function App() {
    return (<div>
        <beautiful_skill_tree_1.SkillProvider>
          <beautiful_skill_tree_1.SkillTreeGroup>
            {function () {
        return (<beautiful_skill_tree_1.SkillTree treeId="basic-birch" title="First Skill Tree" data={[]}/>);
    }}
          </beautiful_skill_tree_1.SkillTreeGroup>
        </beautiful_skill_tree_1.SkillProvider>
      </div>);
}
