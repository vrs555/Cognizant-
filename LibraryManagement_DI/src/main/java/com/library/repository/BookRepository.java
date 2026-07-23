package com.library.repository;

public class BookRepository {

    public String findBookById(int id){
        return "Book ID: "+id+" | Spring in Action | Craig Walls";
    }
}
