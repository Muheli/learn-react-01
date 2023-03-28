import { ExperienceProvider } from '@vatom/experience-sdk'


function App() {
  return (
    <ExperienceProvider>
      <Component />
    </ExperienceProvider>
  )
}


function Component() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}


export default App
