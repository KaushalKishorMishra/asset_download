VIDEO_URL_FILE="./urls/videoURLs.txt"
VIDEO_DOWNLOAD_DIR="./assets/videos"

IMAGE_URL_FILE="./urls/flareImageURLs.txt"
IMAGE_DOWNLOAD_DIR="./assets/images"

_url() {
    echo "$1" | tr -d '[:cntrl:]'
}

_name() {
    basename "$1"
}

_path() {
    echo "$1/$2"
}

_download() {
    if ! curl -o "$1" "$2"; then
        echo "Error downloading $2"
    fi
}

_complete(){
    mkdir -p "$1"
    echo "Download Started for $1"
    # Download the videos
    for url in $(cat "$2"); do
        
        # Remove control characters from the URL
        cleaned_url=$(_url $url)
        
        # Extract the file name from the URL
        file_name=$(_name $cleaned_url)
        
        # Construct the complete file path
        complete_file_path=$(_path $1 $file_name)
        
        echo "url: $url"
        echo "cleaned_url: $cleaned_url"
        echo "file_name: $file_name"
        echo "complete_file_path: $complete_file_path"
        
        # Download the video with error handling
        _download $complete_file_path $cleaned_url
    done
    
    echo "Download Completed for $1"
}

_complete $VIDEO_DOWNLOAD_DIR $VIDEO_URL_FILE
_complete $IMAGE_DOWNLOAD_DIR $IMAGE_URL_FILE

