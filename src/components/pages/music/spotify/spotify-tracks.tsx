"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const SpotifyTracks: React.FC = () => {
  const [tracks, setTracks] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const API_URL = "https://spotify23.p.rapidapi.com/tracks/";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.get(API_URL);
  //       setTracks(data.tracks);
  //     } catch (err) {
  //       setError("Failed to fetch data from Spotify.");
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    console.log("Mello");
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "da310a6ea2msh905ef0560873e9ep1e9dedjsnb4da7fa7572c",
              "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from Spotify");
        }

        const data = await response.json();
        setTracks(data.tracks);
      } catch (err) {
        setError("Failed to fetch data from Spotify.");
      }
    };

    fetchData();
  }, []);

  const url = "http://localhost:8000/users";
  const options = {};
  const retryCount = 3;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async (retries: number) => {
      try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Fetched data:", result);
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.warn("Fetch request was aborted");
        } else if (retries > 0) {
          // Retry logic
          console.log(`Retrying... (${retryCount - retries + 1})`);
          fetchData(retries - 1);
        } else {
          // Handle errors
          setError(err.message || "An error occurred");
          console.error("Fetch error:", err);
        }
      }
    };

    fetchData(retryCount);

    return () => {
      controller.abort();
    };
  }, []);

  function isPalindrome(str: string) {
    // Convert to lowercase and remove spaces.
    const cleanedStr = str.toLowerCase().split(" ").join("");

    let left = 0;
    let right = cleanedStr.length - 1;

    // Check characters from both ends moving towards the center.
    while (left < right) {
      if (cleanedStr[left] !== cleanedStr[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  }

  console.log(isPalindrome("A man a plan a canal Panama")); // true
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false

  // function flattenArray(arr: any) {
  //   const result: any = [];

  //   function flattenHelper(subArray: any) {
  //     for (let i = 0; i < subArray.length; i++) {
  //       if (Array.isArray(subArray[i])) {
  //         // Recursively flatten the nested arrays.
  //         flattenHelper(subArray[i]);
  //       } else {
  //         // Push non-array elements directly.
  //         result.push(subArray[i]);
  //       }
  //     }
  //   }

  //   flattenHelper(arr);
  //   return result;
  // }

  // console.log(flattenArray([1, [2, [3, 4], 5], 6]));
  // // Output: [1, 2, 3, 4, 5, 6]

  // function removeDuplicates(arr: any) {
  //   const result = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     let isDuplicate = false;
  //     for (let j = 0; j < result.length; j++) {
  //       if (arr[i] === result[j]) {
  //         isDuplicate = true;
  //         break;
  //       }
  //     }

  //     // If no duplicate was found, add the element to result.
  //     if (!isDuplicate) {
  //       result.push(arr[i]);
  //     }
  //   }

  //   return result;
  // }

  // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  // // Output: [1, 2, 3, 4, 5]

  // function findLargest(arr: any) {
  //   if (arr.length === 0) return null;

  //   let largest = arr[0];

  //   for (let i = 1; i < arr.length; i++) {
  //     if (arr[i] > largest) {
  //       largest = arr[i];
  //     }
  //   }

  //   return largest;
  // }

  // console.log(findLargest([1, 22, 3, 44, 5]));
  // // Output: 44

  // function reverseString(str: string) {
  //   let reversedStr = "";

  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversedStr += str[i];
  //   }

  //   return reversedStr;
  // }

  // console.log(reverseString("hello")); // Output: "olleh"

  // function sumOfDigits(num: number) {
  //   let sum = 0;
  //   let current = Math.abs(num); // Use absolute value to handle negative numbers

  //   while (current > 0) {
  //     sum += current % 10; // Add the last digit
  //     current = Math.floor(current / 10); // Remove the last digit
  //   }

  //   return sum;
  // }

  // console.log(sumOfDigits(12345)); // Output: 15
  // console.log(sumOfDigits(-987)); // Output: 24

  // function fibonacci(n: any) {
  //   const sequence = [0, 1];

  //   for (let i = 2; i < n; i++) {
  //     sequence.push(sequence[i - 1] + sequence[i - 2]);
  //   }

  //   return sequence.slice(0, n);
  // }

  // console.log(fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]

  // function findMissingNumber(arr: any) {
  //   const n = arr.length;
  //   let totalSum = (n * (n + 1)) / 2; // Sum of numbers from 0 to n
  //   let arraySum = 0;

  //   for (let i = 0; i < arr.length; i++) {
  //     arraySum += arr[i];
  //   }

  //   return totalSum - arraySum;
  // }

  // console.log(findMissingNumber([3, 0, 1])); // Output: 2
  // console.log(findMissingNumber([0, 1, 2, 4, 5])); // Output: 3

  // function arraysEqual(arr1: any, arr2: any) {
  //   if (arr1.length !== arr2.length) return false;

  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr1[i] !== arr2[i]) return false;
  //   }

  //   return true;
  // }

  // console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // Output: true
  // console.log(arraysEqual([1, 2, 3], [1, 2, 4])); // Output: false

  // function countFrequency(arr: any) {
  //   const frequency: any = {};

  //   for (let i = 0; i < arr.length; i++) {
  //     const element = arr[i];
  //     if (frequency[element] != null) {
  //       frequency[element]++;
  //     } else {
  //       frequency[element] = 1;
  //     }
  //   }

  //   return frequency;
  // }

  // console.log(countFrequency([1, 2, 2, 3, 3, 3, 4]));
  // // Output: { 1: 1, 2: 2, 3: 3, 4: 1 }

  return (
    <div>
      {error && <p>{error}</p>}
      <div>
        {tracks.map((track) => (
          <div key={track.id}>
            <img
              src={track.album.images[0]?.url}
              alt={track.name}
              width="150"
            />
            <p>{track.name}</p>
            <p>{track.artists.map((artist: any) => artist.name).join(", ")}</p>
            <motion.audio
              id="audio"
              src={track.external_urls.spotify}
              autoPlay={true}
              loop={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotifyTracks;
