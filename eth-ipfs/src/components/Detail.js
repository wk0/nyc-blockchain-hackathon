import React from "react";
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';


const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
};

class Detail extends React.Component{

    constructor(props){
        super(props);

        const {id} = this.props.match.params;
    }

    render(){
        const { classes } = this.props;
        const {id} = this.props.match.params;
        const imgSrc="https://ipfs.io/ipfs/"+id;
        return(
            <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={imgSrc}
                    title="Contemplative Reptile"
                /> 
                <CardContent>
                <h2>
                    Lizard
                </h2>
                <p>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </p>
                </CardContent>
                <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                </CardActions>
            </Card>
            </div>
        );
    }

}

export default withStyles(styles)(Detail);