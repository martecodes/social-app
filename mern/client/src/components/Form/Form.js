import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

export default function Form() {
  const [postData, setPostData] = useState ({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  }) 

  const classes = useStyles();

  const handleSumbit = () => {

  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSumbit}>

      <Typography variant="h6"> Creating a Memory</Typography>

      <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...post, creator: e.target.value })}/>
      <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...post, title: e.target.value })}/>
      <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...post, message: e.target.value })}/>
      <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...post, tags: e.target.value })}/>

      <div className={classes.fileInput}> 
        <FileBase type="file"multiple={false}onDone = {({base64}) => setPostData({ ...postData, selectedFile: base64 })}
        />
      </div>

      <Button className={classes.buttonSubmit} variant="caontained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      <Button variant="caontained" color="secondary" size="smal" onClick={clear} fullWidth>Clear</Button>

      </form>
    </Paper>
  );
}
