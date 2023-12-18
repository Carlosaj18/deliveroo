import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { CategoryCard } from "../components/CategoryCard";
import { client, urlFor } from "../sanity";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "category"]
      `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* {categories.map((category) => (
        <CategoryCard
          key={category._id}
          title={category.name}
          imgUrl={urlFor(category.title).width(200).url()}
        />
      ))} */}
      <CategoryCard title="Sea Food" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard
        title="Burger"
        imgUrl="https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg"
      />
      <CategoryCard
        title="Chicken"
        imgUrl="https://www.seriouseats.com/thmb/LJQ1jFVrlJbSb23MmK5iwHUr_EY=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2015__07__20210324-SouthernFriedChicken-Andrew-Janjigian-21-cea1fe39234844638018b15259cabdc2.jpg"
      />
      <CategoryCard
        title="Fish"
        imgUrl="https://eingev.co.il/wp-content/uploads/thumbs/rest-33piexxlcekso7y4fzdp8q.jpg"
      />
      <CategoryCard
        title="Asian"
        imgUrl="https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg"
      />
    </ScrollView>
  );
}
