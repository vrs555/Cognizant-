package com.cognizant.loan.controller;

import com.cognizant.loan.model.Loan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoanController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(LoanController.class);

    @GetMapping("/loans/{number}")
    public Loan getLoan(@PathVariable String number) {

        LOGGER.info("Start");

        Loan loan = new Loan(
                number,
                "car",
                400000,
                3258,
                18
        );

        LOGGER.info("End");

        return loan;
    }

}
