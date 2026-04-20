import React, { useState, useEffect } from "react"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BlogPostLayout from "../../../components/blog-post-layout"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


//story writing component
const DialogueWritingPage = () => {
  return(
    <BlogPostLayout>
      <h2>Dialogue Writing</h2>
      <DialogueList />
    </BlogPostLayout>
  )
}

//list of stories
const DialogueList=()=>{
  const [open, setOpen] = React.useState(false);
  const [posts, setPosts] = useState([]) // Array to hold all posts
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)

  


  // Fetch the JSON file and parse it
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://cdn.codeinjar.com/english/dialogue/api/posts.json") // URL to the JSON file
        if (!response.ok) {
          throw new Error("Failed to fetch posts")
        }
        const data = await response.json()
        setPosts(data.posts) // Access the posts array inside the JSON object
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
  
    useEffect(() => {
      fetchPosts()
    }, []) // Empty array to ensure this runs once when the component mounts


  // open the dialog with selected post
  const handleClickOpen = (post) => {
    setOpen(true)
    setSelectedPost(post) // Set the selected post to display in the modal
  }
  //close the dialog
  const handleClose = () => {
    setOpen(false);
  };


  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }


  // Function for formatted json content
  const formatContent = (content) => {
    // Function to replace \n with <br /> tags
     let formattedContent = content.replace(/\n/g, "<br />");

     // Example: Replace **bold** with <b> tags for bold text
     formattedContent = formattedContent.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>"); // **bold** => <b>bold</b>

    // Example: Replace {{color:red}} with a span tag that applies the color
    formattedContent = formattedContent.replace(/\{\{color:(.*?)\}\}/g, '<span style="color:$1">$1</span>'); // {{color:red}} => <span style="color:red">text</span>

    return formattedContent;
  }

  return (
    <div>

      {
        posts.map((post, index)=>(
          <div>
            <Button variant="text" onClick={() => handleClickOpen(post)}>
            {post.id}. {post.title}
            </Button>
          </div>
        ))
      }

      {/* Render the Dialog when a post is selected */}
      {selectedPost && (
          <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
            {selectedPost.title}
            </DialogTitle>
            <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
            <DialogContent dividers style={{lineHeight: "1.8"}}>
              <DialogContentText>
              <p dangerouslySetInnerHTML={{ __html: formatContent(selectedPost.content) }}/> {/* Post content will appear here */}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} autoFocus>Close</Button>
            </DialogActions>
          </Dialog>
        )}
    </div>
  );
}



export default DialogueWritingPage;
