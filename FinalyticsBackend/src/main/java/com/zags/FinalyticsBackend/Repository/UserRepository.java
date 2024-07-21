package com.zags.FinalyticsBackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
 
import com.zags.FinalyticsBackend.Models.User;

@Repository
public interface UserRepository extends JpaRepository<User,String>{


    

    

}
