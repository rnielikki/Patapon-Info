# setReplaceTextFromInt

Converts from text to string and stores the result string to the magic words list.

## Code Information

- **Name**: `setReplaceTextFromInt`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 45 00`
- **Assembly Address in Memory** : `0x894d51c`

## Parameters

- `(int)magicword_index` *(8 bytes)* : The `X` value from `\<NX>`. Usually this is 15 (`0xF`).
- `(int)value` *(8 bytes)* : The integer value to convert to string.


## Example

Here is one example in hex:

```25 0a 45 00 / 02 00 00 00 / 0f 00 00 00 / 08 00 00 00 / c2 00 00 00```

Which is interpreted as:

```c
setReplaceTextFromInt((int)15, ((global)int *)giVar194)
```

And then, display any message with `\<N15>`, and then `\<N15>` will be replaced to giVar194 value above.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894d51c(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined auStack96 [32];
  undefined auStack64 [64];
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if ((-1 < *piVar1) && (*piVar1 < 0x10)) {
    Message::Number::Number_To_ByteString(auStack96,0x20,&DAT_08a6167c,*puVar2);
    Message::Write_Value_Final(auStack64,0x40,auStack96);
    iVar3 = *piVar1;
    *(undefined4 *)(iVar3 * 8 + 0x8ab93b8) = 0xffffffff;
    *(undefined *)(iVar3 * 8 + 0x8ab93bc) = 0;
    iVar3 = Save::Get_Save_BaseAddr(1);
    Write_NX_Magicword(*(int *)(iVar3 + 0x50) + 0x2b408,*piVar1,auStack64);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

