import {
    SkillTreeGroup,
    SkillTree,
    SkillProvider,
    SkillType,
    SkillGroupDataType,
} from '../node_modules/beautiful-skill-tree';
  
function App() {
    return (
      <div>
        <SkillProvider>
          <SkillTreeGroup>
            {() => {
              return (
                <SkillTree treeId="basic-birch" title="First Skill Tree" data={[]} />
              )
            }}
          </SkillTreeGroup>
        </SkillProvider>
      </div>
    );
  }