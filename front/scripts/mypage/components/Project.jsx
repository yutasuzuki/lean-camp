import React, { PureComponent } from 'react';
import { Switch, NavLink, Route} from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import LeanCanvas from '../containers/LeanCanvas';
import ExperimentBoard from '../containers/ExperimentBoard';
import CustomerJourneyMap from '../containers/CustomerJourneyMap';
import Loader from './Loader';

//ページの中身用のコンポーネントを作成
const topPage = () => <div><h1>Dashboard</h1>ここがトップページです</div>
const page3 = () => <div><h1>page3</h1>3枚目のページです</div>

class ProjectComponent extends PureComponent {
  constructor(props) {
    super(props);

    if (this.props.match.params.id) {
      const params = {
        id: this.props.match.params.id
      };
      this.props.fetchProject(params);
      this.props.fetchLeanCanvas(params);
    } else {
      this.props.history.push('/404')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projects.error.status === 404) {
      this.props.history.push('/404')
    }
  }

  render() {
    const { id, name } = this.props.projects.item;
    if (!id) {
      return <Loader />
    }

    return (
      <Main>
        <Project>
          <ProjectName>{ name }</ProjectName>
          <ProjectNavigation>
            <ul>
              <li >
                <NavLink exact to={`${this.props.match.url}`} activeClassName='active'>DashBoard</NavLink>
              </li>
              <li >
                <NavLink to={`${this.props.match.url}/lean_canvas`} activeClassName='active'>Lean Canvas</NavLink>
              </li>
              <li >
                <NavLink to={`${this.props.match.url}/experiment_board`} activeClassName='active'>Experiment Board</NavLink>
              </li>
              <li >
                <NavLink to={`${this.props.match.url}/customer_journey_map`} activeClassName='active'>Customer Journey Map</NavLink>
              </li>
            </ul>
          </ProjectNavigation>
        </Project>
        <Switch>
          <Route path={'/project/:project_id/lean_canvas'} component={LeanCanvas}/>
          <Route path={'/project/:project_id/experiment_board'} component={ExperimentBoard}/>
          <Route path={'/project/:project_id/customer_journey_map'} component={CustomerJourneyMap}/>
          <Route path={`${this.props.match.url}/page3`} component={page3}/>
          <Route path={`${this.props.match.url}/`} component={topPage}/>
        </Switch>
      </Main>
    )
  }
}

export default ProjectComponent

const Main = styled.main`
  margin: 80px 3vw 120px;
`

const Project = styled.div`

`;

const ProjectName = styled.h1`
  font-size: 20px;
  margin: 0 0 20px;

  &::before {
    content: 'PROJECT';
    font-size: 14px;
    margin-right: 12px;
    font-family: 'Raleway', sans-serif;
    opacity: .66;
  }
`;

const ProjectNavigation = styled.nav`
  ul {
    display: block;
    margin: 0 0 32px;
    padding: 0;
    border-bottom: 1px solid rgb(216, 219, 222);
  }

  li {
    position: relative;
    bottom: 5px;
    display: inline-block;
    line-height: 1;
    font-size: 14px;
    padding: 8px 0;
    margin: 0 24px 0 0;

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    text-decoration: none;
    padding: 2px 4px 12px;
    opacity: .25;
    cursor: pointer;

    &:hover:not(.active) {
      opacity: .5;
    }

    &.active {
      font-weight: bold;
      border-bottom: 1px solid rgb(78, 80, 103);
      opacity: 1;
      cursor: default;
    }
  }
`