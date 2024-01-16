app.get("/files", async (req,res) =>{
    fs.readdir('./files/', (err,files) => {
      if(err){
        return res.status(500).json({ error : 'Failed to retrieve files'});
      }else{
        return res.json(files)
      }
    })
  });
  
  app.get("/file/:filename",(req,res) => {
    const filename = './files/'+req.params.filename;
    fs.readFile(filename, 'utf-8', (err,data) => {
      if(err){
        res.status(404).send('File not found');
      }else{
        return res.status(200).send(data)
      }
    })
  });