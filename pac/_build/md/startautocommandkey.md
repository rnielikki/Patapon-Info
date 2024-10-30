# startAutoCommandKey

Start performing the command sequence that was set from [addAutoCommandKey](./addautocommandkey.md).

## Code Information

- **Name**: `startAutoCommandKey`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 10 00`
- **Assembly Address in Memory** : `0x8970b04`

## Parameters

- `(undefined4)Var0` *(8 bytes)* : Please describe.

## Example

Here is one example in hex:

```25 0c 10 00 / 02 00 00 00 / ff ff ff ff```

Which is interpreted as:

```c
startAutoCommandKey((int)-1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970b04(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if (iVar2 != 0) {
    func_0x08b746d8(iVar2 + 8,*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

