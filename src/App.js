import './App.css';
import Form1 from './components/Form1/Form1'
import Form2 from './components/Form2/Form2'
import FormWrapper from './components/FormWrapper/FormWrapper';
import JobCard from './components/JobCard/JobCard';
import JobDashboard from './components/JobDashboard/JobDashboard';
import { data } from './data/data';

function App() {
  return (
    <div className="App bg-gray-100 font-body">
      <FormWrapper step_number={1} form={<Form1 />} />
      <FormWrapper step_number={2} form={<Form2 />} />
      <JobCard data={data[0]}/>
      <JobDashboard />
    </div>
  );
}

export default App;
