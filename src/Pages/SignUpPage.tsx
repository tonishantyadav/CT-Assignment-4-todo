import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
  firstname: z
    .string()
    .min(1, "First name is required")
    .max(100, "Firstname is too long"),
  lastname: z
    .string()
    .min(0, "Last name is required")
    .max(100, "Lastname is too long"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 8 characters"),
});

type FormData = z.infer<typeof schema>;

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [showPassword, setShowPassword] = useState(false);
  const naviagte = useNavigate();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    naviagte("/tasks");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"4xl"}>Sign Up</Heading>
            <HStack justifyContent="space-between">
              <FormControl id="firstname">
                <FormLabel>First Name</FormLabel>
                <Input type="text" {...register("firstname")} />
                {errors.firstname && (
                  <Text color="tomato">{errors.firstname.message}</Text>
                )}
              </FormControl>
              <FormControl id="lastname">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" {...register("lastname")} />
                {errors.lastname && (
                  <Text color="tomato">{errors.lastname.message}</Text>
                )}
              </FormControl>
            </HStack>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" {...register("email")} />
              {errors.email && (
                <Text color="tomato">{errors.email.message}</Text>
              )}
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && (
                <Text color="tomato">{errors.password.message}</Text>
              )}
            </FormControl>
            <HStack justifyContent="space-between">
              <Checkbox>Remember me</Checkbox>
              <Link marginY={2} color={"teal.300"}>
                Forgot password?
              </Link>
            </HStack>
            <Stack>
              <Button variant="solid" colorScheme="teal" type="submit">
                Sign up
              </Button>
              <Text align={"center"}>
                Need an account? <Link color={"teal.300"}>Sign Up</Link>
              </Text>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </form>
  );
};

export default SignUpPage;
