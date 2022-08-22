package com.example.beveragesrecipes.controllers;

import com.example.beveragesrecipes.models.RawIngredient;
import com.example.beveragesrecipes.repositories.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class IngredientController {
    @Autowired
    IngredientRepository ingredientRepository;

    @GetMapping("/ingredients")
    public ResponseEntity<List<RawIngredient>> getAllIngredients(){
        return new ResponseEntity<>(ingredientRepository.findAll(), HttpStatus.OK);
    }
}