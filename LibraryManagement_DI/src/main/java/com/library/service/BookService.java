package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }

    public void displayBookDetails(int id){
        System.out.println("Retrieving Book Details...");
        System.out.println(bookRepository.findBookById(id));
    }
}
