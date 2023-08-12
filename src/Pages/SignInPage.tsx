import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 8 characters"),
});

type FormData = z.infer<typeof schema>;

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    navigate("/tasks");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={{ base: "column", md: "row" }} height="60vh">
        <Flex p={5} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign In</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" {...register("email")} />
              {errors.email && (
                <Text color="tomato">{errors.email.message}</Text>
              )}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register("password")} />
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
                Sign in
              </Button>
              <Text align={"center"}>
                Need an account?{" "}
                <Link color={"teal.300"} as={ReactRouterLink} to="/signup">
                  Sign Up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </form>
  );
};

export default SignInPage;
