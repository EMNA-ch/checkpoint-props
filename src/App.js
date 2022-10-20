import Profile from './Profile/Profile';

function App() {
  let fullName = 'Emna';
  let Bio = 'Web dev';
  let Profession = 'Enginneer';
  let handleName = (n) => alert(`${n} is the user name`);
  return (
    <div>
      <Profile A={fullName} B={Bio} C={Profession} fnc={handleName}>
        <img
          src='https://img.freepik.com/vecteurs-libre/petite-fille-asiatique-pointant-index-kid-montrant-direction-faisant-attention-au-geste_71593-1028.jpg?w=2000'
          style={{ width: '200p', height: '200px' }}
          alt=''
        />
      </Profile>
    </div>
  );
}

export default App;
