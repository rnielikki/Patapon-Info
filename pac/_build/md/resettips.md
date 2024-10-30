# resetTips

Resets the current tip status, **does not reset with tip album**.

## Code Information

- **Name**: `resetTips`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 1f 00`
- **Assembly Address in Memory** : `0x894b504`

## Parameters

- `(Undefined)Var0` *(8 bytes)* : Only -1 is observed.

## Example

Here is one example in hex:

```25 0a 1f 00 / 02 00 00 00 / ff ff ff ff```

Which is interpreted as:

```c
resetTips((int)-1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894b504(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  undefined4 uVar2;
  
  Pac_Get_Param(param_2,0,1,4);
  uVar1 = FUN_08a16cc8(1);
  uVar2 = Add_New_Tips();
  FUN_08a18184(uVar1,uVar2);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

