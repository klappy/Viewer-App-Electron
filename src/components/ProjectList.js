import React, { PropTypes } from 'react';
import ProjectListRow from './ProjectListRow';
import { FormattedMessage } from 'react-intl';
import { Panel } from 'react-bootstrap/lib';

const ProjectList = ({ projects, showLoader, syncAdapter }) => {
    const hasExisting = projects.length > 0;
    return hasExisting
        ? (
            <div id="projectList" style={{flex: "1 1 auto", overflowY: 'auto', marginTop: '10px'}}>
                <span style={{color: '#0b82ff',fontWeight: 'bold' }}>Available Projects</span>
                {
                    projects.map((project, i) => {
                        return (<ProjectListRow
                            key = {i}
                            index = {i}
                            project = {project}
                            showLoader = {showLoader}
                            syncAdapter = {syncAdapter}
                        />);
                    })
                }
            </div>
        )
        : (
            <div style={{marginTop: '10px'}}><FormattedMessage id="label-no-project"/></div>
        );
};

export default ProjectList;