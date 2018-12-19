import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
//import { createCourse } from './courseAction';
import * as courseActions from './courseAction';
class CoursesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {
                title: ""
            }
        };// if bind(this) is mentioned in the constructor it loads only once and will not load
        //each time the event (clicking the button or changing the title) occurs.
        this.onTitleChange=this.onTitleChange.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        this.setState({ course: { title: event.target.value } });
    }
    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    onClickSave = () => {
        //alert(`Saving ${this.state.course.title} `);
        //this.props.dispatch(createCourse(this.state.course));
       // this.props.dispatch({ type: "CREATE_COURSE", course: this.state.course });
       //this.props.createCourse(this.state.course);
       this.props.actions.createCourse(this.state.course);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add course </h2>
                <input type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input type="submit"
                    value="save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}
CoursesPage.propTypes = {
   // dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
   createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return ({ courses: state.courses });
}
function mapDispatchToProps(dispatch){
    return({
       // createCourse : course => {dispatch(courseActions.createCourse(course))}
       actions :bindActionCreators(courseActions, dispatch)
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);