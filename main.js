var uploadFiles = new Vue({
    el:"#uploadFiles",
    data:{

    },
    methods: {
        sendFiles:function(){
            var File = new FormData();
            var formFile = this.$refs.filejs.files[0];
            File.append('filejs', formFile);
            axios.post(
                'singlefile.php',
                File,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(function(response){
                console.log(response.data);
                //console.log('SUCCESS!!');
            })
            .catch(function(){
                console.log('FAILURE!!');
            });
        }
    },
});