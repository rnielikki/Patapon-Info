# cmd_flgZERO

Jumps to specific address if every parameter is zero. Opposite to [cmd_flgAND](./cmd_flgand.md).

Check [about flag](./guide/about-flag.md) to learn about the flag.

## Code Information

- **Name**: `cmd_flgZERO`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 2e 00`
- **Assembly Address in Memory** : `0x883a33c`

## Parameters

- `(Address)address` *(4 bytes)* : Address to jump if the result is `true`.
- `(index...)Var1` *(>= 8 bytes)* : This can be one or more. If this parameter is only one, it is just about `true` or `false` for the one parameter.

## Example

Here is one example in hex:

```25 00 2e 00 / b8 09 00 00 / 01 00 00 00 / c6 03 00 00```

Which is interpreted as:

```c
cmd_flgZERO(0x9b8, 0x3c6)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883a33c(undefined4 param_1,undefined4 param_2)

{
  bool bVar1;
  int iVar2;
  undefined4 *puVar3;
  int *piVar4;
  uint *puVar5;
  int iVar6;
  int iVar7;
  
  iVar2 = FUN_0883c070(param_2);
  bVar1 = true;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,0,0,4);
  piVar4 = (int *)Pac_Get_Param(param_2,1,0,1);
  iVar7 = 0;
  if (0 < *piVar4) {
    do {
      puVar5 = (uint *)Pac_Get_Param(param_2,2,0,4);
      if (((int)(uint)*(byte *)(*(int *)(iVar2 + 4) + (*puVar5 >> 3)) >> (*puVar5 & 7) & 1U) == 1) {
        bVar1 = false;
        iVar6 = *piVar4;
      }
      else {
        iVar6 = *piVar4;
      }
      iVar7 = iVar7 + 1;
    } while (iVar7 < iVar6);
  }
  if (bVar1) {
    PAC::Cmd_Jump_Or_Call(param_2,*puVar3,0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
