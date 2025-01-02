import { Box, TextField, Typography } from '@mui/material'


function ContactUs() {
  return (
    <>
    <Box sx={{width:"100%", height:"54.2rem"}}>
      <Typography variant='h3' sx={{color:"#2E5077", fontFamily:"cursive"}}>Contact Us</Typography>
      <Typography variant='h5' color='#2E5077'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab sapiente dicta accusamus, accusantium, vitae ratione numquam ducimus harum sint quo animi reprehenderit est, voluptatum exercitationem rem facere esse tempore hic?</Typography>
      <Box sx={{display:"flex", justifyContent:"space-between"}}>
    <form>
    <TextField placeholder='name'></TextField>
    <TextField placeholder='email'></TextField>
    <TextField placeholder='your Message'></TextField>
    
    </form>
      </Box>
    </Box>
    </>
  )
}

export default ContactUs



 