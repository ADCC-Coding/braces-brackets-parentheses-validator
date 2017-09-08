using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BracketValidator
{
    class Program
    {
        static void Main(string[] args)
        {
            var input1 = "{adf(asd)[ee](asdfadsf[adsfadfs{adfsasdf}aasdf]asdfa)}";
            var input2 = "{ [ ] ( ) }";
            var input3 = "{ [ ( ] ) }";
            var input4 = "{ [ }";
            var input5 = ")))(((";
            var input6 = "()()()";
            var input7 = "()()())";

            Console.WriteLine(ValidateBrackets(input1));
            Console.WriteLine(ValidateBrackets(input2));
            Console.WriteLine(ValidateBrackets(input3));
            Console.WriteLine(ValidateBrackets(input4));
            Console.WriteLine(ValidateBrackets(input5));
            Console.WriteLine(ValidateBrackets(input6));
            Console.WriteLine(ValidateBrackets(input7));
            Console.ReadLine();
        }


        static readonly char[] openers = { '{', '[', '(' };
        static readonly char[] closers = { ')', ']', '}' };
        

        static bool ValidateBrackets(string input)
        {
            var stackOfChars = new Stack<char>();

            foreach (var character in input.ToCharArray())
            {
                if (openers.Contains(character))
                {
                    stackOfChars.Push(character);
                }
                else if (closers.Contains(character))
                {
                    if(stackOfChars.Count <= 0)
                    {
                        return false;
                    }
                    var lastOpener = stackOfChars.Pop();
                    switch (lastOpener)
                    {
                        case '{':
                            if (character != '}')
                            {
                                return false;
                            }
                            break;
                        case '(':
                            if (character != ')')
                            {
                                return false;
                            }
                            break;
                        case '[':
                            if (character != ']')
                            {
                                return false;
                            }
                            break;
                    }
                }
            }

            return stackOfChars.Count == 0;
        }
    }
}
