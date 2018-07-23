import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import {connect} from 'react-redux';
import {getFeatures, deleteFeature, addFeature} from '../actions/featureActions';
import classNames from 'classnames';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import uuid from "uuid";

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});

class ToDoList extends React.Component {
  state = {
    checked: [1],
  };

  componentDidMount() {
    this.props.getFeatures();
  }

  onDeleteFeature(id) {
    console.log("deleteFeature : ", id);
    this.props.deleteFeature(id)
  }

  onAddFeature = () => {
    const {value} = document.getElementById('todo-input');
    const newFeature = { id: uuid(), name: value };
    this.props.addFeature(newFeature);
	}

  render() {
    const { classes, features } = this.props;
    const fab = classNames({
      position: 'absolute',
      bottom:  0,
      right:  0,
    });

    return (
      <div>
        <List className={classes.root}>
          {features.map((feature, k) => (
            <ListItem key={k} dense button onClick={this.onDeleteFeature.bind(this, feature._id)}>
              <Avatar
                alt="Remy Sharp"
                src="https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
              />
              <ListItemText primary={feature.name} />
            </ListItem>
          ))}
        </List>
        <Button variant="fab" color="secondary" className={classes.fab} onClick={this.onAddFeature}>
          <AddIcon />
        </Button>
      </div>
    );
  }
}

ToDoList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  features: state.feature.features
});

export default connect(mapStateToProps, {getFeatures, addFeature, deleteFeature})(withStyles(styles)(ToDoList));