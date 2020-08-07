import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from 'reactstrap';
import wikiSearch from "../utils/API";
import API from "../utils/API";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState({
        term: "Denver",
        title: "",
        url: ""

    });

    const { term, title, url } = searchTerm;

    useEffect(() => {
        if (!term) {
            return
        }
        wikiSearch(term)
    }, [term]);

    const wikiSearch = (term) => {
        API.wikiSearch(term)
            .then(res => {
                console.log(res);
                setSearchTerm({
                    ...searchTerm,
                    // term: res.data[0],
                    title: res.data[1][0],
                    url: res.data[3][0]
                });
            })
            .catch(err => { throw (err) })
    }

    const handleInputChange = event => {
        // const term = event.target.value;
        console.log("name: " + event.target.name);
        console.log("value: " + event.target.value)

        setSearchTerm({ ...searchTerm, term: event.target.value })
        // same as :
        // const { name, value } = event.target;
        // setSearchTerm({ ...searchTerm, [name]: value })       
    }

    return (
        <Container>
            <h2>Search</h2>
            <Form >
                <FormGroup >
                    <Label for="term">Wikipedia Search</Label>
                    <Input
                        value={term}
                        onChange={handleInputChange}
                        type="text"
                        name="term"
                        id="term"
                        placeholder="Enter your search term!"
                    />
                </FormGroup>
                <Button >Search</Button>
            </Form>
            {/* <div>
                <h2>
                    You are searching for
                    <a href={`https://en.wikipedia.org/wiki/${searchTerm}`}> {searchTerm}</a>
                </h2>
                <a href={`https://en.wikipedia.org/wiki/${searchTerm}`}>{`https://en.wikipedia.org/wiki/${searchTerm}`}</a>
            </div> */}

        </Container>

    )
}

export default Search;