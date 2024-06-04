URL_FILE="./urls.txt"
DOWNLOAD_DIR="./videos"

mkdir -p "$DOWNLOAD_DIR"

# Download the videos
for url in $(cat "$URL_FILE"); do

    # Remove control characters from the URL
    cleaned_url=$(echo "$url" | tr -d '[:cntrl:]')
    
    # Extract the file name from the URL
    file_name=$(basename "$cleaned_url")

    # Construct the complete file path
    complete_file_path="$DOWNLOAD_DIR/$file_name"
    
    
    echo "URL = $url"
    echo "Cleaned URL = $cleaned_url"
    echo "Complete File Path = $complete_file_path"
    
    # Download the video with error handling
    if ! curl -o "$complete_file_path" "$cleaned_url" ; then
        echo "Error downloading $cleaned_url"
    fi
done